'use strict';
var CLOUD_HEIGTH = 270, CLOUD_WIDTH = 420;
var CLOUD_X = 110, CLOUD_Y = 20;
var GAP = 25;
var FONT_GAP = 15, BASE_TEXT = 50, TEXT_HEIGHT = 20;
var BAR_WIDTH = 40, barHeight = 150;

var drawWinWindow = function(ctx, offset, color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(CLOUD_X + offset, CLOUD_Y + offset);
    ctx.bezierCurveTo(CLOUD_X + 20 + offset, CLOUD_Y - 20 + offset, CLOUD_X + 50 + offset, CLOUD_Y - 30 + offset, CLOUD_X + 80 + offset, CLOUD_Y - 5 + offset);
    ctx.bezierCurveTo(CLOUD_X + 90 + offset, CLOUD_Y - 26 + offset, CLOUD_X + 120 + offset, CLOUD_Y - 20 + offset, CLOUD_X + 150 + offset, CLOUD_Y - 10 + offset);
    ctx.bezierCurveTo(CLOUD_X + 190 + offset, CLOUD_Y - 15 + offset, CLOUD_X + 240 + offset, CLOUD_Y - 15 + offset, CLOUD_X + 270 + offset, CLOUD_Y - 12 + offset);
    ctx.lineTo(CLOUD_WIDTH + offset, CLOUD_Y + offset);
    ctx.lineTo(CLOUD_WIDTH + 10 + offset, CLOUD_Y + 50 + offset);
    ctx.lineTo(CLOUD_WIDTH - 10 + offset, CLOUD_Y + 120 + offset);
    ctx.lineTo(CLOUD_WIDTH + 15 + offset, CLOUD_Y + 210 + offset);
    ctx.lineTo(CLOUD_WIDTH + 7 + offset, CLOUD_Y + 240 + offset);
    ctx.lineTo(CLOUD_WIDTH + offset, CLOUD_HEIGTH + offset);
    ctx.lineTo(CLOUD_WIDTH - 40 + offset, CLOUD_HEIGTH + 20  + offset);
    ctx.lineTo(CLOUD_WIDTH - 130 + offset, CLOUD_HEIGTH + 13 + offset);
    ctx.lineTo(CLOUD_WIDTH - 206 + offset, CLOUD_HEIGTH + 3 + offset);
    ctx.lineTo(CLOUD_WIDTH - 257 + offset, CLOUD_HEIGTH + 17  + offset);
    ctx.lineTo(CLOUD_X + offset, CLOUD_HEIGTH + offset);
    ctx.bezierCurveTo(CLOUD_X - 10 + offset, CLOUD_HEIGTH - 30 + offset, CLOUD_X + -25 + offset, CLOUD_HEIGTH - 80 + offset, CLOUD_X - 5 + offset, CLOUD_HEIGTH - 140 + offset);
    ctx.bezierCurveTo(CLOUD_X - 5 + offset, CLOUD_HEIGTH - 150 + offset, CLOUD_X + -15 + offset, CLOUD_HEIGTH - 196 + offset, CLOUD_X - 10 + offset, CLOUD_HEIGTH - 250 + offset);
    ctx.lineTo(CLOUD_X + offset, CLOUD_Y + offset);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
  };

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  drawWinWindow(ctx, 10, 'rgba(0, 0, 0, 0.7)');
  drawWinWindow(ctx, 0, 'white');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, вы победилили', CLOUD_X + FONT_GAP, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y + 35);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillText(names[i], CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP + BASE_TEXT);

    ctx.fillRect(CLOUD_X + FONT_GAP + (GAP + BAR_WIDTH) * i, CLOUD_Y + GAP + BASE_TEXT + TEXT_HEIGHT + barHeight, BAR_WIDTH, -((barHeight * times[i]) / maxTime));
  }

};
