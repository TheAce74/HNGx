import { useState, forwardRef } from "react";
import FormInput from "./FormInput";
import Button from "../ui/Button";
import Eye from "../ui/Eye";

const FormInputHOC = forwardRef(
  ({ type, placeholder, required, icon }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="form-input-hoc border rounded border-2">
        <span>{icon()}</span>
        <FormInput
          type={
            type === "password" ? (!showPassword ? "password" : "text") : type
          }
          placeholder={placeholder}
          required={required}
          ref={ref}
        />
        {type === "password" ? (
          <Button
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            <Eye isOpen={showPassword} />
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }
);
export default FormInputHOC;
