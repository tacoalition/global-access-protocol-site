import * as embed from '@typeform/embed'

// Handle varying module formats — createPopup may be a direct export
// or nested under .default depending on bundler interop
const mod = embed.default || embed

export const createPopup = mod.createPopup
