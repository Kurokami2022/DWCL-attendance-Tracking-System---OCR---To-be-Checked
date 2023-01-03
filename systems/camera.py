from pytesseract import pytesseract
import cv2
import sqlite3
from datetime import datetime

cur1 = sqlite3.connect('stud_data.db')
now = datetime.now()

date_str = now.strftime("%m-%d-%Y")

table_name = date_str

cur1.execute(f'''CREATE TABLE IF NOT EXISTS '{table_name}' (ID VARCHAR(255), name VARCHAR(255), course VARCHAR(255))''')
cur1.commit()

path_to_tesseract = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
pytesseract.tesseract_cmd = path_to_tesseract
video = cv2.VideoCapture(0)
video.set(cv2.CAP_PROP_FPS, 60)
cntr = 0
while True:
    ret, capture = video.read()
    cntr = cntr + 1
    if ((cntr % 20) == 0):
        imgH, imgW, _ = capture.shape
        x1, y1, w1, h1 = 0, 0, imgH, imgW
        text = pytesseract.image_to_string(capture)
        box = pytesseract.image_to_boxes(capture)
        for boxes in box.splitlines():
            boxes = boxes.split(' ')
            x, y, w, h = int(boxes[1]), int(boxes[2]), int(boxes[3]), int(boxes[4])
            cv2.rectangle(capture, (x, imgH - y), (w, imgH - h), (75, 255, 25), 2)
            cv2.putText(capture, "Hit ESC to stop the camera", (x1 + int(w1 / 50), y1 + int(h1 / 50)),
            cv2.FONT_HERSHEY_PLAIN, 1, (255, 0, 0), 1)
            cv2.imshow('text detection', capture)
            if cv2.waitKey(1) % 256 == 27:
                video.release()
                cv2.destroyAllWindows()
                break
        if text == "" or text == " ":
            pass
        else:
            name = cur1.execute("SELECT name FROM students")
            for i in name.fetchall():
                if str(text.strip()) in i:
                    sdata = cur1.execute("SELECT * FROM students")
                    for x in sdata.fetchall():
                        if str(text.strip()) in x:
                            uni = cur1.execute(f'''SELECT * FROM '{table_name}' ''')
                            if x not in uni.fetchall(): 
                                tups = (x)
                                cur1.execute(f'''INSERT INTO '{table_name}' VALUES(?, ?, ?)''', tups)
                                cur1.commit()
                                print("Data inserted")
                            else:
                                pass
                else:
                    pass