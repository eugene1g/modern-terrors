import ModernError from "modern-errors";
import modernErrorsClean from "modern-errors-clean";

export const BaseError = ModernError.subclass("BaseError", {
  plugins: [modernErrorsClean],
});
