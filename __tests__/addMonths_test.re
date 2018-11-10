open Jest;

open Js.Date;

describe("addMonths", () => {
  open ExpectJs;

  test("adds 1 month", () => {
    let date = makeWithYMD(~year=2018., ~month=0., ~date=1., ());
    let expectedDate = makeWithYMD(~year=2018., ~month=1., ~date=1., ());

    date->ReDate.addMonths(1)->expect->toEqual(expectedDate, _);
  });

  test("adds 30 months", () => {
    let date = makeWithYMD(~year=2018., ~month=5., ~date=1., ());
    let expectedDate = makeWithYMD(~year=2020., ~month=11., ~date=1., ());

    date->ReDate.addMonths(30)->expect->toEqual(expectedDate, _);
  });
});
