def text_separator(text):
    if text == '':
        return ['']
    text_lines = text.split('\n')
    #print(text_lines)
    text_char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPEQRSTUVWXYZ12345667890ÂÀÁÇÉÊËÈÏÎÔÖÛÙâàáçéêëèïîôöûù"

    for line in text_lines:
        if line == ' ' or line == '':
            continue
        for char in text_char:
            if char in line:
                break
        else:
            text_lines.remove(line)

    return text_lines
