const PDFDocument = require("pdfkit");
const fs = require("fs");

const COLORS = {
  primary: "#1C2733",
  accent: "#FF6B4A",
  text: "#2A2F36",
  muted: "#6B7280",
  light: "#F5F3EF",
  white: "#FFFFFF",
  border: "#E3E1DC",
};

function newDoc(outputPath) {
  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 70, bottom: 70, left: 60, right: 60 },
    bufferPages: true,
    info: { Title: outputPath },
  });
  doc.pipe(fs.createWriteStream(outputPath));
  return doc;
}

function coverPage(doc, { brand, domain, title, subtitle, tag = "Digital Product" }) {
  const W = doc.page.width;
  const H = doc.page.height;
  doc.rect(0, 0, W, H).fill(COLORS.primary);
  doc.rect(0, 0, W, 14).fill(COLORS.accent);

  doc
    .fillColor(COLORS.accent)
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(brand.toUpperCase(), 60, 100, { characterSpacing: 2 });

  doc
    .fillColor(COLORS.white)
    .font("Helvetica-Bold")
    .fontSize(36)
    .text(title, 60, 200, { width: W - 120, lineGap: 6 });

  if (subtitle) {
    doc
      .fillColor("#C9CDD3")
      .font("Helvetica")
      .fontSize(15)
      .text(subtitle, 60, doc.y + 18, { width: W - 120, lineGap: 4 });
  }

  const badgeY = H - 160;
  doc.roundedRect(60, badgeY, 180, 36, 6).fill(COLORS.accent);
  doc
    .fillColor(COLORS.white)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(tag.toUpperCase(), 60, badgeY + 12, { width: 180, align: "center", characterSpacing: 1 });

  doc
    .fillColor("#8A8F98")
    .font("Helvetica")
    .fontSize(10)
    .text(domain, 60, H - 90);

  doc.addPage();
}

function tocPage(doc, brand, entries) {
  sectionTitle(doc, "Table of Contents");
  doc.moveDown(1);
  entries.forEach((e, i) => {
    const y = doc.y;
    doc.fillColor(COLORS.text).font("Helvetica-Bold").fontSize(11).text(e.title, 60, y, { continued: false, width: 420 });
    doc.fillColor(COLORS.muted).font("Helvetica").fontSize(11).text(String(e.page), 500, y, { width: 40, align: "right" });
    doc.moveTo(60, doc.y + 4).lineTo(535, doc.y + 4).strokeColor(COLORS.border).lineWidth(0.5).stroke();
    doc.moveDown(0.9);
  });
  doc.addPage();
}

function sectionTitle(doc, title, opts = {}) {
  if (doc.y > 700) doc.addPage();
  doc.fillColor(COLORS.accent).rect(60, doc.y, 34, 4).fill();
  doc.moveDown(0.4);
  doc.fillColor(COLORS.primary).font("Helvetica-Bold").fontSize(20).text(title, 60, doc.y, { width: 475 });
  doc.moveDown(0.6);
}

function subTitle(doc, title) {
  ensureSpace(doc, 40);
  doc.fillColor(COLORS.accent).font("Helvetica-Bold").fontSize(13).text(title, { width: 475 });
  doc.moveDown(0.3);
}

function bodyText(doc, text) {
  ensureSpace(doc, 30);
  doc.fillColor(COLORS.text).font("Helvetica").fontSize(10.5).text(text, { width: 475, lineGap: 3 });
  doc.moveDown(0.5);
}

function bulletList(doc, items) {
  items.forEach((item) => {
    ensureSpace(doc, 24);
    const y = doc.y;
    doc.fillColor(COLORS.accent).font("Helvetica-Bold").fontSize(10.5).text("—", 60, y, { width: 14 });
    doc.fillColor(COLORS.text).font("Helvetica").fontSize(10.5).text(item, 78, y, { width: 457, lineGap: 2 });
    doc.moveDown(0.35);
  });
  doc.moveDown(0.3);
}

function numberedList(doc, items, startAt = 1) {
  items.forEach((item, idx) => {
    ensureSpace(doc, 24);
    const y = doc.y;
    doc.fillColor(COLORS.accent).font("Helvetica-Bold").fontSize(10).text(`${startAt + idx}.`, 60, y, { width: 24 });
    doc.fillColor(COLORS.text).font("Helvetica").fontSize(10.5).text(item, 88, y, { width: 447, lineGap: 2 });
    doc.moveDown(0.35);
  });
  doc.moveDown(0.3);
}

function promptList(doc, prompts, startAt = 1) {
  prompts.forEach((p, idx) => {
    const text = `${startAt + idx}.  ${p}`;
    doc.font("Helvetica").fontSize(9.2);
    const height = doc.heightOfString(text, { width: 475, lineGap: 1 });
    ensureSpace(doc, height + 8);
    doc.fillColor(COLORS.text).font("Helvetica").fontSize(9.2).text(text, 60, doc.y, { width: 475, lineGap: 1 });
    doc.moveDown(0.3);
  });
}

function fieldBlock(doc, label, opts = {}) {
  ensureSpace(doc, 34);
  doc.fillColor(COLORS.primary).font("Helvetica-Bold").fontSize(10).text(label, { width: 475 });
  const lineY = doc.y + 4;
  doc.moveTo(60, lineY).lineTo(535, lineY).strokeColor(COLORS.border).lineWidth(0.75).stroke();
  doc.moveDown(1.1);
  if (opts.hint) {
    doc.fillColor(COLORS.muted).font("Helvetica-Oblique").fontSize(8.5).text(opts.hint, 60, doc.y - 20, { width: 475 });
    doc.moveDown(0.3);
  }
}

function table(doc, headers, rows, colWidths) {
  const startX = 60;
  let y = doc.y;
  ensureSpace(doc, 30);
  y = doc.y;
  let x = startX;
  doc.rect(startX, y, colWidths.reduce((a, b) => a + b, 0), 24).fill(COLORS.primary);
  doc.fillColor(COLORS.white).font("Helvetica-Bold").fontSize(9);
  headers.forEach((h, i) => {
    doc.text(h, x + 6, y + 7, { width: colWidths[i] - 10 });
    x += colWidths[i];
  });
  y += 24;
  doc.y = y;

  rows.forEach((row, rIdx) => {
    const rowHeight = 22;
    ensureSpace(doc, rowHeight + 4);
    y = doc.y;
    x = startX;
    if (rIdx % 2 === 0) {
      doc.rect(startX, y, colWidths.reduce((a, b) => a + b, 0), rowHeight).fill(COLORS.light);
    }
    doc.fillColor(COLORS.text).font("Helvetica").fontSize(8.7);
    row.forEach((cell, i) => {
      doc.text(String(cell), x + 6, y + 6, { width: colWidths[i] - 10 });
      x += colWidths[i];
    });
    doc.y = y + rowHeight;
  });
  doc.moveDown(0.8);
}

function checklist(doc, items) {
  items.forEach((item) => {
    ensureSpace(doc, 22);
    const y = doc.y;
    doc.rect(60, y + 1, 10, 10).lineWidth(1).strokeColor(COLORS.accent).stroke();
    doc.fillColor(COLORS.text).font("Helvetica").fontSize(10).text(item, 80, y, { width: 455, lineGap: 2 });
    doc.moveDown(0.45);
  });
  doc.moveDown(0.3);
}

function ensureSpace(doc, needed) {
  if (doc.y + needed > doc.page.height - 70) {
    doc.addPage();
  }
}

function divider(doc) {
  ensureSpace(doc, 20);
  doc.moveDown(0.3);
  doc.moveTo(60, doc.y).lineTo(535, doc.y).strokeColor(COLORS.border).lineWidth(0.75).stroke();
  doc.moveDown(0.6);
}

function contactPage(doc, { brand, phone, email, address, domain }) {
  doc.addPage();
  const W = doc.page.width;
  const H = doc.page.height;
  doc.rect(0, 0, W, H).fill(COLORS.primary);
  doc.rect(0, 0, W, 14).fill(COLORS.accent);

  doc.fillColor(COLORS.accent).font("Helvetica-Bold").fontSize(12).text(brand.toUpperCase(), 60, 110, { characterSpacing: 2 });
  doc.fillColor(COLORS.white).font("Helvetica-Bold").fontSize(28).text("Need Help?", 60, 160);
  doc
    .fillColor("#C9CDD3")
    .font("Helvetica")
    .fontSize(12)
    .text("Our support team is ready to help with questions about this product or your account.", 60, doc.y + 14, { width: 460, lineGap: 4 });

  let y = 320;
  const rows = [
    ["Email", email],
    ["Phone", phone],
    ["Address", address],
    ["Website", domain],
  ];
  rows.forEach(([label, value]) => {
    doc.fillColor(COLORS.accent).font("Helvetica-Bold").fontSize(10).text(label.toUpperCase(), 60, y, { characterSpacing: 1 });
    doc.fillColor(COLORS.white).font("Helvetica").fontSize(13).text(value, 60, y + 16, { width: 460 });
    y += 60;
  });

  const originalBottom = doc.page.margins.bottom;
  doc.page.margins.bottom = 0;
  doc
    .fillColor("#8A8F98")
    .font("Helvetica")
    .fontSize(9)
    .text(`© 2026 ${brand}. All rights reserved. This document is licensed for the purchaser's personal or business use.`, 60, H - 80, { width: 460 });
  doc.page.margins.bottom = originalBottom;
}

function addPageNumbers(doc, brand) {
  const range = doc.bufferedPageRange();
  for (let i = 1; i < range.count; i++) {
    doc.switchToPage(i);
    const originalBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc
      .fillColor(COLORS.muted)
      .font("Helvetica")
      .fontSize(8)
      .text(`${brand}  ·  Page ${i + 1}`, 60, doc.page.height - 45, { width: 475, align: "center", lineBreak: false });
    doc.page.margins.bottom = originalBottom;
  }
}

module.exports = {
  COLORS,
  newDoc,
  coverPage,
  tocPage,
  sectionTitle,
  subTitle,
  bodyText,
  bulletList,
  numberedList,
  promptList,
  fieldBlock,
  table,
  checklist,
  ensureSpace,
  divider,
  contactPage,
  addPageNumbers,
};
