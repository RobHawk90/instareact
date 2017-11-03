export function actionLike(photoId, likerOrDisliker) {
  return { type: 'LIKE', photoId, likerOrDisliker }
}

export function actionComment(photoId, comment) {
  return { type: 'COMMENT', photoId, comment }
}

export function actionList(photos) {
  return { type: 'LIST', photos }
}

export function actionNotify(message) {
  return { type: 'NOTIFY', message }
}
