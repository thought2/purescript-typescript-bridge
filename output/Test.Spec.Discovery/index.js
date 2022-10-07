// Generated by purs version 0.15.4
import * as $foreign from "./foreign.js";
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Promise from "../Control.Promise/index.js";
import * as Data_Foldable from "../Data.Foldable/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Effect_Aff from "../Effect.Aff/index.js";
import * as Effect_Aff_Class from "../Effect.Aff.Class/index.js";
import * as Test_Spec from "../Test.Spec/index.js";
var bind = /* #__PURE__ */ Control_Bind.bind(Effect_Aff.bindAff);
var pure = /* #__PURE__ */ Control_Applicative.pure(Effect_Aff.applicativeAff);
var sequence_ = /* #__PURE__ */ Data_Foldable.sequence_(/* #__PURE__ */ Test_Spec.applicativeSpecT(Data_Identity.applicativeIdentity))(Data_Foldable.foldableArray);
var discover = function (dictMonadAff) {
    var liftAff = Effect_Aff_Class.liftAff(dictMonadAff);
    return function (pattern) {
        return liftAff(bind(Control_Promise.toAffE($foreign.getSpecs(pattern)))(function ($8) {
            return pure(sequence_($8));
        }));
    };
};
export {
    discover
};
