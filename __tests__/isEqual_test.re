open Jest;

open Js.Date;

describe("isEqual", () => {
  open ExpectJs;

  test("returns true if the given dates are equal", () => {
    let firstDate = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    let secondDate = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    ReDate.isEqual(firstDate, secondDate)->expect->toBeTruthy;
  });

  test("returns false if the given dates are not equal", () => {
    let firstDate = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    let secondDate = makeWithYMD(~year=2018., ~month=0., ~date=2., ());

    ReDate.isEqual(firstDate, secondDate)->expect->toBeFalsy;
  });
});
