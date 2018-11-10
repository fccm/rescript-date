open Jest;

open Js.Date;

describe("addWeeks", () => {
  open ExpectJs;

  test("adds 1 week", () => {
    let date = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    let expectedDate = makeWithYMD(~year=2018., ~month=0., ~date=8., ());

    date->ReDate.addWeeks(1.)->expect->toEqual(expectedDate, _);
  });

  test("adds 10 weeks", () => {
    let date = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    let expectedDate = makeWithYMD(~year=2018., ~month=2., ~date=12., ());

    date->ReDate.addWeeks(10.)->expect->toEqual(expectedDate, _);
  });
});
