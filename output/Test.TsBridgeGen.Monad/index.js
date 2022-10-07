// Generated by purs version 0.15.4
import * as Control_Applicative from "../Control.Applicative/index.js";
import * as Control_Bind from "../Control.Bind/index.js";
import * as Control_Monad_Error_Class from "../Control.Monad.Error.Class/index.js";
import * as Control_Monad_Except_Trans from "../Control.Monad.Except.Trans/index.js";
import * as Control_Monad_RWS from "../Control.Monad.RWS/index.js";
import * as Control_Monad_RWS_Trans from "../Control.Monad.RWS.Trans/index.js";
import * as Control_Monad_Reader_Class from "../Control.Monad.Reader.Class/index.js";
import * as Control_Monad_Rec_Class from "../Control.Monad.Rec.Class/index.js";
import * as Control_Monad_Writer_Class from "../Control.Monad.Writer.Class/index.js";
import * as Data_Either from "../Data.Either/index.js";
import * as Data_Eq from "../Data.Eq/index.js";
import * as Data_Functor from "../Data.Functor/index.js";
import * as Data_Generic_Rep from "../Data.Generic.Rep/index.js";
import * as Data_Identity from "../Data.Identity/index.js";
import * as Data_Map_Internal from "../Data.Map.Internal/index.js";
import * as Data_Monoid from "../Data.Monoid/index.js";
import * as Data_Show from "../Data.Show/index.js";
import * as Data_Show_Generic from "../Data.Show.Generic/index.js";
import * as Data_Typelevel_Undefined from "../Data.Typelevel.Undefined/index.js";
import * as TsBridgeGen_Types from "../TsBridgeGen.Types/index.js";
var errorsIsSymbol = {
    reflectSymbol: function () {
        return "errors";
    }
};
var logsIsSymbol = {
    reflectSymbol: function () {
        return "logs";
    }
};
var monoidRecord = /* #__PURE__ */ Data_Monoid.monoidRecord()(/* #__PURE__ */ Data_Monoid.monoidRecordCons(errorsIsSymbol)(Data_Monoid.monoidArray)()(/* #__PURE__ */ Data_Monoid.monoidRecordCons(logsIsSymbol)(Data_Monoid.monoidArray)()(Data_Monoid.monoidRecordNil)));
var monadRWST = /* #__PURE__ */ Control_Monad_RWS_Trans.monadRWST(Data_Identity.monadIdentity)(monoidRecord);
var genericShowArgsProduct = /* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ Data_Map_Internal.showMap(Data_Show.showString)(Data_Show.showString)));
var genericShowArgsProduct1 = /* #__PURE__ */ Data_Show_Generic.genericShowArgsProduct(/* #__PURE__ */ Data_Show_Generic.genericShowArgsArgument(/* #__PURE__ */ Data_Show.showRecord()()(/* #__PURE__ */ Data_Show.showRecordFieldsCons(errorsIsSymbol)(/* #__PURE__ */ Data_Show.showRecordFieldsConsNil(logsIsSymbol)(/* #__PURE__ */ Data_Show.showArray(TsBridgeGen_Types.showAppLog)))(/* #__PURE__ */ Data_Show.showArray(TsBridgeGen_Types.showAppError)))));
var showEither = /* #__PURE__ */ Data_Either.showEither(TsBridgeGen_Types.showAppError);
var TestMResultIsSymbol = {
    reflectSymbol: function () {
        return "TestMResult";
    }
};
var map = /* #__PURE__ */ Data_Functor.map(Data_Either.functorEither);
var eq = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Map_Internal.eqMap(Data_Eq.eqString)(Data_Eq.eqString));
var eq1 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(TsBridgeGen_Types.eqAppError));
var eq2 = /* #__PURE__ */ Data_Eq.eq(/* #__PURE__ */ Data_Eq.eqArray(TsBridgeGen_Types.eqAppLog));
var eqEither = /* #__PURE__ */ Data_Either.eqEither(TsBridgeGen_Types.eqAppError);
var tell = /* #__PURE__ */ Control_Monad_Writer_Class.tell(/* #__PURE__ */ Control_Monad_Except_Trans.monadTellExceptT(/* #__PURE__ */ Control_Monad_RWS_Trans.monadTellRWST(Data_Identity.monadIdentity)(monoidRecord)));
var pure = /* #__PURE__ */ Control_Applicative.pure(Control_Applicative.applicativeArray);
var TestMResult = /* #__PURE__ */ (function () {
    function TestMResult(value0, value1, value2) {
        this.value0 = value0;
        this.value1 = value1;
        this.value2 = value2;
    };
    TestMResult.create = function (value0) {
        return function (value1) {
            return function (value2) {
                return new TestMResult(value0, value1, value2);
            };
        };
    };
    return TestMResult;
})();
var TestM = function (x) {
    return x;
};
var monadThrowAppErrorTestM = /* #__PURE__ */ Control_Monad_Except_Trans.monadThrowExceptT(monadRWST);
var throwError = /* #__PURE__ */ Control_Monad_Error_Class.throwError(monadThrowAppErrorTestM);
var monadTestM = /* #__PURE__ */ Control_Monad_Except_Trans.monadExceptT(monadRWST);
var monadRecTestM = /* #__PURE__ */ Control_Monad_Except_Trans.monadRecExceptT(/* #__PURE__ */ Control_Monad_RWS_Trans.monadRecRWST(Control_Monad_Rec_Class.monadRecIdentity)(monoidRecord));
var monadErrorAppErrorTestM = /* #__PURE__ */ Control_Monad_Except_Trans.monadErrorExceptT(monadRWST);
var monadAskAppEnvTestMTestM = /* #__PURE__ */ Control_Monad_Except_Trans.monadAskExceptT(/* #__PURE__ */ Control_Monad_RWS_Trans.monadAskRWST(Data_Identity.monadIdentity)(monoidRecord));
var ask = /* #__PURE__ */ Control_Monad_Reader_Class.ask(monadAskAppEnvTestMTestM);
var genericTestMResult_ = {
    to: function (x) {
        return new TestMResult(x.value0, x.value1.value0, x.value1.value1);
    },
    from: function (x) {
        return new Data_Generic_Rep.Product(x.value0, new Data_Generic_Rep.Product(x.value1, x.value2));
    }
};
var genericShow = /* #__PURE__ */ Data_Show_Generic.genericShow(genericTestMResult_);
var showTestMResult = function (dictShow) {
    return {
        show: genericShow(Data_Show_Generic.genericShowConstructor(genericShowArgsProduct(genericShowArgsProduct1(Data_Show_Generic.genericShowArgsArgument(showEither(dictShow)))))(TestMResultIsSymbol))
    };
};
var functorTestMResult = {
    map: function (f) {
        return function (m) {
            return new TestMResult(m.value0, m.value1, map(f)(m.value2));
        };
    }
};
var functorTestM = /* #__PURE__ */ Control_Monad_Except_Trans.functorExceptT(/* #__PURE__ */ Control_Monad_RWS_Trans.functorRWST(Data_Identity.functorIdentity));
var eqTestMResult = function (dictEq) {
    var eq3 = Data_Eq.eq(eqEither(dictEq));
    return {
        eq: function (x) {
            return function (y) {
                return eq(x.value0)(y.value0) && (eq1(x.value1.errors)(y.value1.errors) && eq2(x.value1.logs)(y.value1.logs)) && eq3(x.value2)(y.value2);
            };
        }
    };
};
var bindTestM = /* #__PURE__ */ Control_Monad_Except_Trans.bindExceptT(monadRWST);
var bind = /* #__PURE__ */ Control_Bind.bind(bindTestM);
var applyTestM = /* #__PURE__ */ Control_Monad_Except_Trans.applyExceptT(monadRWST);
var applicativeTestM = /* #__PURE__ */ Control_Monad_Except_Trans.applicativeExceptT(monadRWST);
var pure1 = /* #__PURE__ */ Control_Applicative.pure(applicativeTestM);
var monadAppConfigTestM = {
    askAppConfig: /* #__PURE__ */ bind(ask)(function (v) {
        return pure1(v.config);
    })
};
var monadAppEffectsTestM = {
    askAppEffects: /* #__PURE__ */ bind(ask)(function (v) {
        return pure1(v.capabilities);
    })
};
var runTestM = function (r) {
    return function (s) {
        return function (v) {
            return (function (v1) {
                return new TestMResult(v1.value0, v1.value2, v1.value1);
            })((function (x) {
                return Control_Monad_RWS.runRWS(x)(r)(s);
            })(Control_Monad_Except_Trans.runExceptT(v)));
        };
    };
};
var initState = Data_Map_Internal.empty;
var runTestM_ = function (testEnv) {
    return runTestM(testEnv)(initState);
};
var emptyTestMAccum = /* #__PURE__ */ Data_Monoid.mempty(monoidRecord);
var monadLogAppLogTestM = {
    log: function (l) {
        return tell({
            logs: pure(l),
            errors: emptyTestMAccum.errors
        });
    },
    getLogs: Data_Typelevel_Undefined["undefined"],
    Monad0: function () {
        return monadTestM;
    }
};
var monadMultipleErrorsAppErr = {
    pushError: function (l) {
        return tell({
            errors: pure(l),
            logs: emptyTestMAccum.logs
        });
    },
    Monad0: function () {
        return monadTestM;
    }
};
var monadAppTestM = {
    MonadError0: function () {
        return monadErrorAppErrorTestM;
    },
    MonadLog1: function () {
        return monadLogAppLogTestM;
    },
    MonadMultipleErrors2: function () {
        return monadMultipleErrorsAppErr;
    },
    MonadRec3: function () {
        return monadRecTestM;
    },
    MonadAppEffects4: function () {
        return monadAppEffectsTestM;
    },
    MonadAppConfig5: function () {
        return monadAppConfigTestM;
    }
};
var defaultTestConfig = {
    assetsDir: "",
    modulesFile: "",
    classFile: "",
    spagoFile: "",
    packagesFile: "",
    allDepsFile: "",
    debug: false
};
var defaultTestCapabilities = /* #__PURE__ */ (function () {
    return {
        readTextFile: function (v) {
            return throwError(TsBridgeGen_Types.ErrUnknown.value);
        },
        writeTextFile: function (v) {
            return function (v1) {
                return throwError(TsBridgeGen_Types.ErrUnknown.value);
            };
        },
        expandGlobsCwd: function (v) {
            return throwError(TsBridgeGen_Types.ErrUnknown.value);
        },
        runPrettier: function (x) {
            return pure1(x);
        },
        mkdirRec: function (v) {
            return throwError(TsBridgeGen_Types.ErrUnknown.value);
        },
        spagoLsDepsTransitive: throwError(TsBridgeGen_Types.ErrUnknown.value),
        spagoSources: throwError(TsBridgeGen_Types.ErrUnknown.value)
    };
})();
export {
    TestMResult,
    defaultTestCapabilities,
    defaultTestConfig,
    runTestM,
    runTestM_,
    bindTestM,
    monadTestM,
    applyTestM,
    applicativeTestM,
    functorTestM,
    monadRecTestM,
    monadErrorAppErrorTestM,
    monadThrowAppErrorTestM,
    monadAskAppEnvTestMTestM,
    monadLogAppLogTestM,
    monadMultipleErrorsAppErr,
    monadAppTestM,
    monadAppEffectsTestM,
    monadAppConfigTestM,
    functorTestMResult,
    genericTestMResult_,
    eqTestMResult,
    showTestMResult
};
