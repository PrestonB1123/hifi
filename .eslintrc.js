module.exports = {
    "root": true,
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "globals": {
        "Account": false,
        "Agent": false,
        "AnimationCache": false,
        "Assets": false,
        "Audio": false,
        "AudioDevice": false,
        "AudioEffectOptions": false,
        "AudioScope": false,
        "AudioStats": false,
        "Avatar": false,
        "AvatarBookmarks": false,
        "AvatarInputs": false,
        "AvatarList": false,
        "AvatarManager": false,
        "Camera": false,
        "Clipboard": false,
        "console": false,
        "ContextOverlay": false,
        "Controller": false,
        "DebugDraw": false,
        "Desktop": false,
        "DesktopPreviewProvider": false,
        "DialogsManager": false,
        "Entities": false,
        "EntityViewer": false,
        "FaceTracker": false,
        "GlobalServices": false,
        "GooglePoly": false,
        "Graphics": false,
        "HMD": false,
        "LaserPointers": false,
        "location": true,
        "LocationBookmarks": false,
        "LODManager": false,
        "Mat4": false,
        "Menu": false,
        "Messages": false,
        "Midi": false,
        "ModelCache": false,
        "module": false,
        "MyAvatar": false,
        "OffscreenFlags": false,
        "Overlays": false,
        "OverlayWebWindow": false,
        "OverlayWindow": false,
        "Paths": false,
        "Picks": false,
        "PickType": false,
        "PointerEvent": false,
        "Pointers": false,
        "print": false,
        "QmlFragment": false,
        "Quat": false,
        "Rates": false,
        "RayPick": false,
        "Recording": false,
        "Render": false,
        "Resource": false,
        "Reticle": false,
        "Scene": false,
        "Script": false,
        "ScriptDiscoveryService": false,
        "Selection": false,
        "Settings": false,
        "Snapshot": false,
        "SoundCache": false,
        "SpeechRecognizer": false,
        "Stats": false,
        "Steam": false,
        "Tablet": false,
        "TextureCache": false,
        "Toolbars": false,
        "UndoStack": false,
        "UserActivityLogger": false,
        "Users": false,
        "Uuid": false,
        "Vec3": false,
        "Wallet": false,
        "WebSocket": false,
        "WebWindow": false,
        "Window": false,
        "XMLHttpRequest": false
    },
    "rules": {
        "brace-style": ["error", "1tbs", {"allowSingleLine": false}],
        "camelcase": ["error"],
        "comma-dangle": ["error", "never"],
        "curly": ["error", "all"],
        "eqeqeq": ["error", "always"],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true, "mode": "strict"}],
        "keyword-spacing": ["error", {"before": true, "after": true}],
        "max-len": ["error", 128, 4],
        "new-cap": ["error"],
        "no-console": ["off"],
        "no-floating-decimal": ["error"],
        "no-magic-numbers": ["error", {"ignore": [0.5, -1, 0, 1, 2], "ignoreArrayIndexes": true}],
        "no-multi-spaces": ["error"],
        "no-multiple-empty-lines": ["error"],
        "no-unused-vars": ["error", {"args": "none", "vars": "local"}],
        "semi": ["error", "always"],
        "space-before-blocks": ["error"],
        "space-before-function-paren": ["error", {"anonymous": "ignore", "named": "never"}],
        "spaced-comment": ["error", "always", {"line": {"markers": ["/"]}}]
    }
};
