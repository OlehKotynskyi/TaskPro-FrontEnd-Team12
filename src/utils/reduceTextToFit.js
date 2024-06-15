const getTextWidth = (text, font) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
  };

export const reduceTextToFit = (text, maxWidth, font) => {
    const ellipsis = "...";
    let width = getTextWidth(text, font);

    if (width <= maxWidth) {
        return text;
    }

    let reducedText = text;
    while (width > maxWidth) {
        reducedText = reducedText.substring(0, reducedText.length - 1);
        width = getTextWidth(reducedText + ellipsis, font);
    }

    return reducedText + ellipsis;
};