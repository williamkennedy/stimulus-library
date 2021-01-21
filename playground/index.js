import {Application} from "stimulus";
import {
  AsyncBlockController,
  AutosizeController,
  AutoSubmitFormController,
  CharCountController,
  ClipboardController,
  ConfirmNavigationController,
  DebugController,
  DetectDirtyController,
  DisableInputsController,
  DismissableController,
  EmptyDomController,
  EnableInputsController,
  FallbackImageController,
  LazyBlockController,
  LimitedSelectionCheckboxesController,
  PasswordConfirmController,
  PasswordPeekController,
  ResponsiveIframeBodyController,
  ScrollIntoFocusController,
  SelfDestructController,
  TeleportController,
  ToggleClassController,
  WordCountController,
} from "stimulus-library/stimulus-library.module";

const application = Application.start();

application.register("async-block", AsyncBlockController);
application.register("auto-submit-form", AutoSubmitFormController);
application.register("autosize", AutosizeController);
application.register("char-count", CharCountController);
application.register("clipboard", ClipboardController);
application.register("confirm-navigation", ConfirmNavigationController);
application.register("debug", DebugController);
application.register("detect-dirty", DetectDirtyController);
application.register("disable-inputs", DisableInputsController);
application.register("dismissable", DismissableController);
application.register("empty-dom", EmptyDomController);
application.register("enable-inputs", EnableInputsController);
application.register("fallback-image", FallbackImageController);
application.register("lazy-block", LazyBlockController);
application.register("limited-selection-checkboxes", LimitedSelectionCheckboxesController);
application.register("password-confirm", PasswordConfirmController);
application.register("password-peek", PasswordPeekController);
application.register("responsive-iframe", ResponsiveIframeBodyController);
application.register("scroll-into-focus", ScrollIntoFocusController);
application.register("self-destruct", SelfDestructController);
application.register("teleport", TeleportController);
application.register("toggle-class", ToggleClassController);
application.register("word-count", WordCountController);