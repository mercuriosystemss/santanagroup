import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
  nombre: string;
  email: string;
  telefono?: string;
  tipoProyecto: string;
  presupuesto?: string;
  timeline?: string;
  mensaje?: string;
}

const internalTemplate = (d: ContactPayload) => `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nuevo Lead — RDSS Santana Group</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111111;border:1px solid #222222;padding:40px 48px 32px;text-align:center;">
            <p style="margin:0 0 6px;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;color:#666666;">RDSS Santana Group</p>
            <h1 style="margin:0;font-size:26px;font-weight:700;color:#f5f0e8;letter-spacing:-0.5px;">Nuevo Lead Recibido</h1>
            <div style="margin:20px auto 0;width:48px;height:1px;background:linear-gradient(90deg,transparent,#888,transparent);"></div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background:#161616;border:1px solid #222222;border-top:none;padding:40px 48px;">

            <p style="margin:0 0 28px;font-size:13px;color:#999999;line-height:1.6;">
              Un cliente potencial ha completado el formulario de contacto. A continuación los detalles del proyecto:
            </p>

            <!-- Data table -->
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${[
                ["Nombre", d.nombre],
                ["Correo", d.email],
                ["Teléfono", d.telefono || "—"],
                ["Tipo de proyecto", d.tipoProyecto],
                ["Presupuesto estimado", d.presupuesto || "—"],
                ["Timeline", d.timeline || "—"],
              ].map(([label, value]) => `
              <tr>
                <td style="padding:12px 16px;background:#1c1c1c;border-bottom:1px solid #222222;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#666666;width:38%;vertical-align:top;">${label}</td>
                <td style="padding:12px 16px;background:#1a1a1a;border-bottom:1px solid #222222;font-size:14px;color:#e8e0d0;font-weight:500;">${value}</td>
              </tr>`).join("")}
            </table>

            ${d.mensaje ? `
            <!-- Message -->
            <div style="margin-top:28px;padding:20px 24px;background:#1c1c1c;border:1px solid #2a2a2a;border-left:3px solid #888888;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#666666;">Mensaje</p>
              <p style="margin:0;font-size:14px;color:#d0c8b8;line-height:1.7;">${d.mensaje.replace(/\n/g, "<br/>")}</p>
            </div>` : ""}

            <!-- CTA -->
            <div style="margin-top:36px;text-align:center;">
              <a href="mailto:${d.email}" style="display:inline-block;padding:14px 36px;background:#f5f0e8;color:#0a0a0a;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;">
                Responder al Cliente
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:24px 48px;text-align:center;border:1px solid #1a1a1a;border-top:none;">
            <p style="margin:0;font-size:11px;color:#444444;line-height:1.6;">
              RDSS Santana Group · La Romana, República Dominicana<br/>
              <a href="https://rdsssantanagroup.com" style="color:#666666;text-decoration:none;">rdsssantanagroup.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

const clientTemplate = (d: ContactPayload) => `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Gracias por contactarnos — RDSS Santana Group</title>
</head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f0e8;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header dark -->
        <tr>
          <td style="background:#0e0e0e;padding:48px 48px 36px;text-align:center;">
            <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.5em;text-transform:uppercase;color:#777777;">RDSS Santana Group</p>
            <h1 style="margin:0;font-size:28px;font-weight:700;color:#f5f0e8;letter-spacing:-0.5px;line-height:1.2;">
              Hemos recibido<br/>tu solicitud
            </h1>
            <div style="margin:24px auto 0;width:48px;height:1px;background:linear-gradient(90deg,transparent,#666,transparent);"></div>
          </td>
        </tr>

        <!-- Cream body -->
        <tr>
          <td style="background:#f5f0e8;padding:44px 48px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.05em;color:#888888;text-transform:uppercase;">Estimado/a</p>
            <p style="margin:0 0 28px;font-size:22px;font-weight:600;color:#1a1a1a;">${d.nombre},</p>

            <p style="margin:0 0 20px;font-size:15px;color:#444444;line-height:1.75;">
              Gracias por ponerte en contacto con nosotros. Tu consulta sobre
              <strong style="color:#1a1a1a;">${d.tipoProyecto}</strong>
              ha sido recibida exitosamente.
            </p>

            <p style="margin:0 0 36px;font-size:15px;color:#444444;line-height:1.75;">
              Uno de nuestros especialistas revisará los detalles de tu proyecto y se pondrá en contacto contigo en un plazo máximo de <strong style="color:#1a1a1a;">24 horas hábiles</strong>.
            </p>

            <!-- Divider -->
            <div style="height:1px;background:linear-gradient(90deg,transparent,#ccbbaa,transparent);margin:0 0 36px;"></div>

            <!-- Summary box -->
            <div style="background:#1a1a1a;padding:28px 32px;margin-bottom:36px;">
              <p style="margin:0 0 18px;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#888888;">Resumen de tu solicitud</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${[
                  ["Proyecto", d.tipoProyecto],
                  ...(d.presupuesto ? [["Presupuesto", d.presupuesto]] : []),
                  ...(d.timeline ? [["Timeline", d.timeline]] : []),
                ].map(([label, value]) => `
                <tr>
                  <td style="padding:6px 0;font-size:11px;color:#666666;width:40%;">${label}</td>
                  <td style="padding:6px 0;font-size:13px;color:#e8e0d0;font-weight:500;">${value}</td>
                </tr>`).join("")}
              </table>
            </div>

            <p style="margin:0;font-size:13px;color:#888888;line-height:1.7;">
              Si tienes alguna pregunta urgente, puedes contactarnos directamente en
              <a href="mailto:contacto@rdsssantanagroup.com" style="color:#1a1a1a;font-weight:600;text-decoration:none;">contacto@rdsssantanagroup.com</a>
              o vía WhatsApp al
              <a href="https://wa.me/18096905636" style="color:#1a1a1a;font-weight:600;text-decoration:none;">+1 (809) 690-5636</a>.
            </p>
          </td>
        </tr>

        <!-- Dark footer -->
        <tr>
          <td style="background:#0e0e0e;padding:32px 48px;text-align:center;">
            <p style="margin:0 0 4px;font-size:13px;font-weight:600;color:#f5f0e8;letter-spacing:0.05em;">RDSS Santana Group</p>
            <p style="margin:0 0 16px;font-size:11px;color:#555555;">La Romana, República Dominicana</p>
            <a href="https://rdsssantanagroup.com" style="font-size:11px;color:#777777;text-decoration:none;letter-spacing:0.1em;">rdsssantanagroup.com</a>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "Email service not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data: ContactPayload = await req.json();
    const { nombre, email, telefono, tipoProyecto, presupuesto, timeline, mensaje } = data;

    if (!nombre || !email || !tipoProyecto) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const sendEmail = async (to: string, subject: string, html: string) => {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "RDSS Santana Group <contacto@rdsssantanagroup.com>",
          to,
          subject,
          html,
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Resend error: ${err}`);
      }
      return res.json();
    };

    await sendEmail(
      "r1987santana@gmail.com",
      `Nuevo Lead: ${tipoProyecto} — ${nombre}`,
      internalTemplate({ nombre, email, telefono, tipoProyecto, presupuesto, timeline, mensaje })
    );

    await sendEmail(
      email,
      "Hemos recibido tu solicitud — RDSS Santana Group",
      clientTemplate({ nombre, email, telefono, tipoProyecto, presupuesto, timeline, mensaje })
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
