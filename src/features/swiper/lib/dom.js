export function getTouchEventData(e) {
    return "changedTouches" in e ? e.changedTouches[0] : e
}