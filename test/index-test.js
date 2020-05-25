  describe('loops', function() {
  describe('breakOut(array, changeValue, stopValue)', function() {
    it('changes every element in `array` to `changeValue` until it reachs `stopValue`', function() {
      const c = Math.floor(Math.random() * 100)
      expect(breakOut([1, 1, 1, 1, 2, 1, 1], c, 2)).toEqual([
        c, c, c, c, 2, 1, 1
      ])
    })
  })

  describe('keepGoing(array, changeValue, skipValue)', function() {
    it('changes every element in `array` to `changeValue` unless the element === `skipValue`', function() {
      const c = Math.floor(Math.random() * 100)

      expect(keepGoing([1, 1, 1, 1, 2, 1, 1], c, 2)).toEqual([
        c, c, c, c, 2, c, c
      ])
    })
  })
