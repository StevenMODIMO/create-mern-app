import os from "os";

const PLATFROM = os.platform();

switch (PLATFROM) {
  case "win32":
    console.log("Windows OS");
    break;
  case "linux":
    console.log("Linux");
    break;
  case "darwin":
    console.log("MacOS");
    break;
  default:
    console.log(PLATFROM);
}
