// Generated by purs version 0.15.4
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Ring from "../Data.Ring/index.js";
import * as Data_Semiring from "../Data.Semiring/index.js";
import * as Effect_Console from "../Effect.Console/index.js";
import * as Test_QuickCheck from "../Test.QuickCheck/index.js";
import * as Test_QuickCheck_Arbitrary from "../Test.QuickCheck.Arbitrary/index.js";
import * as Test_QuickCheck_Gen from "../Test.QuickCheck.Gen/index.js";
var quickCheck$prime = /* #__PURE__ */ Test_QuickCheck["quickCheck$prime"](/* #__PURE__ */ Test_QuickCheck.testableGen(Test_QuickCheck.testableBoolean));
var map = /* #__PURE__ */ Data_Functor.map(Test_QuickCheck_Gen.functorGen);
var checkRingGen = function (dictRing) {
    var sub = Data_Ring.sub(dictRing);
    var Semiring0 = dictRing.Semiring0();
    var zero = Data_Semiring.zero(Semiring0);
    var add = Data_Semiring.add(Semiring0);
    var negate = Data_Ring.negate(dictRing);
    return function (dictEq) {
        var eq = Data_Eq.eq(dictEq);
        return function (gen) {
            var additiveInverse = function (a) {
                return eq(sub(a)(a))(zero) && (eq(add(a)(negate(a)))(zero) && eq(add(negate(a))(a))(zero));
            };
            return function __do() {
                Effect_Console.log("Checking 'Additive inverse' law for Ring")();
                return quickCheck$prime(1000)(map(additiveInverse)(gen))();
            };
        };
    };
};
var checkRing = function (dictRing) {
    var checkRingGen1 = checkRingGen(dictRing);
    return function (dictArbitrary) {
        var arbitrary = Test_QuickCheck_Arbitrary.arbitrary(dictArbitrary);
        return function (dictEq) {
            var checkRingGen2 = checkRingGen1(dictEq);
            return function (v) {
                return checkRingGen2(arbitrary);
            };
        };
    };
};
export {
    checkRing,
    checkRingGen
};
