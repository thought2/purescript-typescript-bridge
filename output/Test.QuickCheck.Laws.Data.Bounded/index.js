// Generated by purs version 0.15.4
import * as Data_Bounded from "../Data.Bounded/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ord from "../Data.Ord/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var map = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var checkBoundedGen = function (dictBounded) {
    var lessThanOrEq = Data_Ord.lessThanOrEq(dictBounded.Ord0());
    var bottom = Data_Bounded.bottom(dictBounded);
    var top = Data_Bounded.top(dictBounded);
    return function (dictOrd) {
        return function (gen) {
            var ordering = function (a) {
                return lessThanOrEq(bottom)(a) && lessThanOrEq(a)(top);
            };
            return function __do() {
                Effect_Console.log("Checking 'Ordering' law for Bounded")();
                return quickCheck$prime(1000)(map(ordering)(gen))();
            };
        };
    };
};
var checkBounded = function (dictArbitrary) {
    var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
    return function (dictBounded) {
        var checkBoundedGen1 = checkBoundedGen(dictBounded)(dictBounded.Ord0());
        return function (dictOrd) {
            return function (v) {
                return checkBoundedGen1(arbitrary);
            };
        };
    };
};
export {
    checkBounded,
    checkBoundedGen
};
