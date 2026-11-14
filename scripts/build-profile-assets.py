"""Build the public resume and monogram assets with ReportLab and Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT

root = Path(__file__).resolve().parents[1]
public = root / 'public'
for size, filename in [(64, 'favicon-nk.png'), (180, 'apple-touch-icon.png')]:
    image = Image.new('RGB', (size * 4, size * 4), '#242620')
    draw = ImageDraw.Draw(image)
    face = ImageFont.truetype('/System/Library/Fonts/HelveticaNeue.ttc', int(size * 2.1))
    draw.text((size * 2, size * 2), 'NK', fill='#f7f6f2', font=face, anchor='mm', stroke_width=0)
    image.resize((size, size), Image.Resampling.LANCZOS).save(public / filename)
Image.open(public / 'favicon-nk.png').save(public / 'favicon-nk.ico', sizes=[(16, 16), (32, 32), (48, 48)])

ink = colors.HexColor('#242620')
muted = colors.HexColor('#53574e')
styles = {
    'name': ParagraphStyle('Name', fontName='Helvetica-Bold', fontSize=27, leading=30, textColor=ink, spaceAfter=5),
    'role': ParagraphStyle('Role', fontName='Helvetica', fontSize=11, leading=15, textColor=ink, spaceAfter=7),
    'links': ParagraphStyle('Links', fontName='Helvetica', fontSize=8.5, leading=13, textColor=muted, spaceAfter=10),
    'section': ParagraphStyle('Section', fontName='Helvetica-Bold', fontSize=9, leading=13, textColor=ink, spaceBefore=11, spaceAfter=6),
    'heading': ParagraphStyle('Heading', fontName='Helvetica-Bold', fontSize=9.5, leading=13, textColor=ink, spaceAfter=2),
    'meta': ParagraphStyle('Meta', fontName='Helvetica', fontSize=8, leading=11, textColor=muted, spaceAfter=3),
    'body': ParagraphStyle('Body', fontName='Helvetica', fontSize=9, leading=13, textColor=ink, spaceAfter=5),
}
def p(text, style='body'):
    return Paragraph(text, styles[style])
def link(url, text):
    return f'<a href="{url}" color="#242620"><u>{text}</u></a>'
story = [p('NK', 'name'), p('Independent developer | AI products', 'role'),
    p('Greater Delhi Area, India | ' + link('mailto:hello.nishantk@proton.me', 'hello.nishantk@proton.me') + '<br/>' +
      ' | '.join([link('https://madewithnk.web.app', 'Portfolio'), link('https://github.com/datascyther', 'GitHub'), link('https://www.linkedin.com/in/madewithnk/', 'LinkedIn'), link('https://www.youtube.com/@madewithnk', 'YouTube')]), 'links'),
    p('I build AI products from idea to release, working across the product experience, application code, and AI runtime. Alongside development, I explain AI and technology to a YouTube audience of 170K+.'),
    p('FLAGSHIP PROJECT', 'section'),
    p('Jouspace | Independent Developer | Sep 2025 - Present', 'heading'),
    p(link('https://jouspace-org.web.app', 'Live product') + ' | ' + link('https://github.com/datascyther/Jouspace', 'Public source'), 'meta'),
    p('Built a local-first journal for web and Android with React, TypeScript and Capacitor. Added optional Firebase sync and a stateless AI runtime using NVIDIA NIM, Cloudflare Workers and Server-Sent Events.'),
    p('Separated request validation, context assembly, prompts, model access and streaming. Implemented timestamp-based sync merges and deletion tombstones, with automated checks and release workflows.'),
    p('EXPERIENCE', 'section')]
roles = [
 ('AI-Native Founder\'s Office Intern | Stealth AI Startup', 'Oct 2026 - Present | Gurugram, India | On-site', 'Lead online presence and social media strategy. Contribute to product strategy across LLM and model choices, engineering priorities, and strategic operations.'),
 ('YouTuber (AI &amp; Tech) | @madewithnk', 'Sep 2022 - Present', 'Grew an AI and technology channel to 170K+ subscribers. Analyze retention, test topics and formats, and use audience response to guide iteration.'),
 ('PM Intern | Pranayuv Technologies', 'Mar 2026 - Aug 2026 | Vijayawada, India', 'Built project tracking workflows in Notion and Asana, documentation repositories, and SOPs to clarify progress, ownership, and next steps.'),
 ('AI Intern | 1M1B (1 Million for 1 Billion)', 'Dec 2025 - Jan 2026 | Greater Delhi Area, India', 'Applied generative AI, IBM Granite models, and retrieval-augmented generation concepts to sustainability-focused problems through IBM SkillsBuild and 1M1B.')]
for title, period, detail in roles:
    story.append(KeepTogether([p(title, 'heading'), p(period, 'meta'), p(detail), Spacer(1, 3)]))
story += [p('EDUCATION', 'section'), p('B.Tech - Computer Science and Engineering (Data Science)', 'heading'), p('Dr. A.P.J. Abdul Kalam Technical University | Aug 2023 - Mar 2027 (expected)', 'meta'),
 p('TECHNOLOGIES', 'section'), p('React, TypeScript, Capacitor, Firebase, Cloudflare Workers, NVIDIA NIM, SSE, Vitest, GitHub Actions')]
doc = SimpleDocTemplate(str(public / 'NK-Resume.pdf'), pagesize=(595.28, 841.89), rightMargin=42, leftMargin=42, topMargin=35, bottomMargin=35, title='NK - Resume', author='NK')
doc.build(story)
print('Created resume and three monogram assets.')
