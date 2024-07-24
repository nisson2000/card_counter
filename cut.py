from PIL import Image
import os

def crop_square_from_images(input_folder, output_folder, crop_size, crop_position):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    file_count = 1  # 初始化編號
    for filename in os.listdir(input_folder):
        if filename.endswith(('.PNG')):
            img_path = os.path.join(input_folder, filename)
            img = Image.open(img_path)
            
            left, top = crop_position
            right = left + crop_size
            bottom = top + crop_size
            
            cropped_img = img.crop((left, top, right, bottom))
            new_filename = f'{file_count:04d}.png'  # 按順序編號，使用4位數格式
            cropped_img.save(os.path.join(output_folder, new_filename))
            print(f'Cropped {filename} and saved as {new_filename}')
            file_count += 1  # 編號遞增

# 使用範例
input_folder = './unprocessed_picture'  # 替換成你的圖片資料夾路徑
output_folder = './result'  # 替換成你的輸出資料夾路徑
crop_size = 260  # 固定大小的正方形邊長
crop_position = (31, 1124)  # 固定位置，左上角座標 (left, top)

crop_square_from_images(input_folder, output_folder, crop_size, crop_position)
