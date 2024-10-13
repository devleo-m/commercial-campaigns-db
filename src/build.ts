import { execSync } from 'child_process'

switch (process.platform) {
    case "win32":
        execSync(`npm run build-windows`);
        break;
    case "linux":
    case "darwin":
        execSync(`npm run build-linux-mac`);
        break;
    default:
        break;
}
