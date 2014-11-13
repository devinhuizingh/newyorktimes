describe('CalendarRange', function() {

  beforeEach(function() {
    this.addMatchers({
      toMatchDate : function() {
        return {
          compare : function(actual, expected) {
            if (typeof expected == 'string') {
              var date = expected.split('-');
              expected = new Date(date[0], date[1], date[2]);
            }

            var result = {
              pass: actual.getMonth() == expected.getMonth() &&
                  actual.getFullYear() == expected.getFullYear() &&
                  actual.getDate() == expected.getDate()
            };

            if(result.pass) {
              result.message = actual + ' matches ' + expected;
            }
            else
            {
              result.message = actual + ' does not match ' + expected;
            }

            return result;
          }

        };
      }
    });
  });

  it('should return the proper object for the given date', function() {
    var date = new Date();
    var prepared = CalendarRange.prepareDate(date);

    var day = date.getDate();
    expect(prepared.weekday).toBe(day != 0 && day != 6);
    expect(prepared.day).toBe(date.getDate());
    expect(prepared.year).toBe(date.getFullYear());
    expect(prepared.month).toBe(date.getMonth());
    expect(prepared.date).toEqual(date);
  });

  it('should return a valid date range for Feb 2014', function() {
    // we know for sure that this month is what it is in terms of dimensions
    var date = new Date(2014, 1, 10);

    var range = CalendarRange.getMonthlyRange(date);

    expect(range.first).toMatchDate('2014-0-26');
    expect(range.start).toMatchDate('2014-1-1');
    expect(range.end).toMatchDate('2014-1-28');
    expect(range.last).toMatchDate('2014-2-1');

    expect(range.days.length).toBe(35);

    for (var i = 0; i < range.days.length; i++) {
      var current = range.days[i];
      expect(CalendarRange.prepareDate(current.date)).toEqual(current);
    }
  });

  it('should return a valid date range for March 2014', function() {
    // we know for sure that this month is what it is in terms of dimensions
    var date = new Date(2014, 2, 10);

    var range = CalendarRange.getMonthlyRange(date);

    expect(range.days.length).toEqual(42);
    expect(range.first).toMatchDate('2014-1-23');
    expect(range.start).toMatchDate('2014-2-1');
    expect(range.end).toMatchDate('2014-2-31');
    expect(range.last).toMatchDate('2014-3-5');

    for (var i = 0; i < range.days.length; i++) {
      var current = range.days[i];
      expect(CalendarRange.prepareDate(current.date)).toEqual(current);
    }  });

});