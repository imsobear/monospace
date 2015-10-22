/**
 * 输出指定长度的 string, 不足时用空格补齐，超出时用...截断
 *
 * @TODO 没考虑中文字符的情况
 */
module.exports = function(str, len) {

  if (str.length > len) {

    return str.slice(0, len - 3) + '...';

  } else if (str.length === len) {

    return str;

  } else {

    var spaces = '';

    for (var i = 0; i < len - str.length; i++) {
      spaces += ' ';
    }

    return str + spaces;

  }

}
