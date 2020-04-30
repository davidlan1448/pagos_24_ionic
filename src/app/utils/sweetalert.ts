import Swal, { SweetAlertOptions } from "sweetalert2";

export const toast = (
  title: string,
  type: SweetAlertOptions["icon"],
  position: SweetAlertOptions["position"] = "center",
  timer: number = 1500,
  options?: SweetAlertOptions,
) => {
  Swal.fire({
    position,
    icon: type,
    title,
    showConfirmButton: false,
    backdrop: "",
    timer,
    ...options
  });
};
