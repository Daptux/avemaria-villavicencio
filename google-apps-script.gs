/**
 * AVEMARÍA — Recepción de solicitudes de "Agendar evento" en Google Sheets.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * CÓMO ACTIVARLO (una sola vez, ~5 minutos):
 *
 * 1. Crea una Google Sheet nueva. En la fila 1 pon estos encabezados
 *    (una columna por celda):
 *      Marca temporal | Nombre | Teléfono | Correo | Tipo de evento |
 *      Personas | Fecha | Hora | Detalles
 *    (Opcional) renombra la pestaña como "Eventos".
 *
 * 2. En esa hoja: menú  Extensiones ▸ Apps Script.
 *    Borra el código de ejemplo y pega TODO este archivo. Guarda (💾).
 *
 * 3. Implementar ▸ Nueva implementación ▸ (engranaje) "Aplicación web":
 *      - Descripción:  Avemaría eventos
 *      - Ejecutar como:  Yo (tu cuenta)
 *      - Quién tiene acceso:  Cualquier usuario
 *    Pulsa "Implementar", autoriza los permisos, y copia la URL que termina en /exec.
 *
 * 4. Abre immersive.html y pega esa URL en la constante SHEETS_ENDPOINT
 *    (busca "GOOGLE SHEETS (opcional)"). Vuelve a desplegar el sitio.
 *
 * Listo: cada solicitud del formulario quedará registrada como una fila nueva.
 * (WhatsApp queda disponible como respaldo en la pantalla de confirmación.)
 * ─────────────────────────────────────────────────────────────────────────
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Eventos') || ss.getSheets()[0];
    sheet.appendRow([
      new Date(),
      data.nombre || '',
      data.telefono || '',
      data.email || '',
      data.tipo || '',
      data.personas || '',
      data.fecha || '',
      data.hora || '',
      data.mensaje || ''
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Permite verificar en el navegador que la Web App está viva (opcional).
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, service: 'avemaria-eventos' }))
    .setMimeType(ContentService.MimeType.JSON);
}
