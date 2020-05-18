export const AUTH = {
  isAuthenticated: 'isAuthenticated',
  isNotAuthenticated: 'notAuthenticated',
  isPending: 'isPending',

  authenticatedMessage: 'OK',

}

export const NOT_FOUND = {
  firstLine: 'This link is broken.. Please try again',
  secondLine: 'Make sure you are authorized, logged in & that you wrote the link correctly',
}

export const API = {
  postRequestSuccess: 'postSuccess',
  postRequestError: 'postError',
  deleteRequestSuccess: 'deleteSuccess',
  deleteRequestError: 'deleteSuccess',

  authEndpoint: 'auth',
  patientEndpoint: 'patient',
  rehabPlansEndpoint: 'rehabPlan',
  videoEndpoint: 'video',
  defaultPlansEndpoint: 'defaultPlan',
}

export const MODAL = {
  defaultErrorDescription: 'unfortunately, something went wrong.. try again',
  optionalPlaceholderToIgnore: '<Optional>',
}


export const DEFAULT_PLAN_FORM = {
  videosTab: 'videos',
  planInfoTab: 'plan information',

  nameLabel: 'plan name:',
  instructionsLabal: 'instructions:',
  chooseVideosLabel: "choose videos: (click on the video's name):",

  selectPlansPlaceholder: 'select default plans...',
}


export const PLAN_FORM = {
  videosAndPlansTab: 'videos & default plans',
  planInfoTab: 'plan information',

  nameLabel: 'plan name:',
  instructionsLabal: 'instructions:',
  defaultPlansLabel: 'choose default plan:',
  chooseVideosLabel: "choose videos: (click on the video's name):",

  selectPlansPlaceholder: 'select default plans...',
}