"""Build the NK monogram assets with Pillow. The supplied resume is managed separately."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
public = root / 'public'
for size, filename in [(64, 'favicon-nk.png'), (180, 'apple-touch-icon.png')]:
    image = Image.new('RGB', (size * 4, size * 4), '#242620')
    draw = ImageDraw.Draw(image)
    face = ImageFont.truetype('/System/Library/Fonts/HelveticaNeue.ttc', int(size * 2.1))
    draw.text((size * 2, size * 2), 'NK', fill='#f7f6f2', font=face, anchor='mm', stroke_width=0)
    image.resize((size, size), Image.Resampling.LANCZOS).save(public / filename)
Image.open(public / 'favicon-nk.png').save(public / 'favicon-nk.ico', sizes=[(16, 16), (32, 32), (48, 48)])
print("Created three monogram assets. The supplied resume is unchanged.")
