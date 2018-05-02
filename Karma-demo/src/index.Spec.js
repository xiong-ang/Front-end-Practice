describe('index.js: ', function() {
    it('isNum() should work fine.', function() {
      expect(isNum(1)).toBe(true)
      expect(isNum('1')).toBe(false)
    });

    it('add() should work fine.', function() {
      expect(add(2,3)).toEqual(5)
      expect(add(7,6)).toEqual(13)
    });
  })


  /*
expect(x).toEqual(y);
//比较x和y是否相等
expect(x).not.toEqual(y);
//比较x和y是否不相等
expect(x).toBe(y);
//比较x和y是否是相同的对象
expect(x).toMatch(pattern);
//比较x是否匹配pattern正则
expect(x).toBeDefined();
//x是否为undefined
expect(x).toBeNull();
//x是否为null
expect(x).toBeTruthy();
//x是否为true
expect(x).toBeFalsy();
//x是否为false
expect(x).toContain(y);
//x是否包含y (x可以是字符串或数组)
expect(x).toBeLessThan(y);
//x是否比y小
expect(x).toBeGreaterThan(y);
//x是否比y大
expect(fn).toThrow(e);
//函数是否抛出异常
*/