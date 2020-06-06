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

export const PATIENT_FORM = {
  formTitle: 'Add a new patient',
  formDescription: 'Add a new patient into your system. Make sure your patient is choosing the password together with you, and that he/she will remember it.',

}

export const VIDEOS_FORM = {
  formTitle: 'Create a new video',
  formDescription: 'This is the place for creating new videos. The videos you are creating here will enter to your videos pool, and could be used by you in the future, for creating new plans from your patients.',
}


export const DEFAULT_PLAN_FORM = {
  formTitle: 'Create a new default plan',
  formDescription: "Default plan is composed of videos and text instructions. Write detailed instructions about your plans, and make sure that the main goal of the plan is written clearly. Choose videos from the available videos in the second modal's tab.",
  videosTab: 'videos',
  planInfoTab: 'plan information',

  nameLabel: 'plan name:',
  instructionsLabel: 'instructions:',
  chooseVideosLabel: "choose videos: (click on the video's name):",

  selectPlansPlaceholder: 'select default plans...',
}


export const PLAN_FORM = {
  formEditTitle: "Edit patient's plan",
  formCreateTitle: "Create patient's plan",
  formDescription: "build a plan for your patient. Write detailed instructions, and compose the plan using the available videos/default plans in the second modal's tab.",
  videosAndPlansTab: 'videos & default plans',
  planInfoTab: 'plan information',

  nameLabel: 'plan name:',
  instructionsLabel: 'instructions:',
  executionLabel: 'plan execution time:',
  defaultPlansLabel: 'choose default plan:',
  chooseVideosLabel: "choose videos: (click on the video's name):",

  selectPlansPlaceholder: 'select default plans...',
}

export const GRAPH = {
  tabKey: {
    accelerations: '1',
    displacements: '2',
    velocities: '3',
  },
  radioValue: {
    x: 'x',
    y: 'y',
    z: 'z',
  },
  // eslint-disable-next-line max-len
  validLeftTigh: [-2.114, -2.404, -2.641, -2.818, -2.929, -2.997, -3.036, -3.056, -3.059, -3.004, -2.879, -2.707, -2.534, -2.363, -2.163, -1.885, -1.475, -0.904, -0.188, 0.617, 1.419, 2.085, 2.487, 2.531, 2.27, 1.796, 1.246, 1.088, 3.281, 6.627, 8.084, 6.629, 3.609, 1.972, 0.675, -0.507, -1.581, -2.011, -1.557, -0.501, 0.623, 1.43, 1.656, 1.301, 0.638, -0.044, -0.563, -0.966, -1.298, -1.562, -1.7, -1.611, -1.268, -0.736, -0.191, 0.203, 0.357, 0.264, 0.008, -0.341, -0.729, -1.145, -1.538, -1.834, -1.976, -1.986, -1.921, -1.833, -1.724, -1.593, -1.451, -1.318, -1.22, -1.164, -1.149, -1.171, -1.211, -1.237, -1.204, -1.075, -0.869, -0.627, -0.421, -0.282, -0.212, -0.145, 0.014, 0.322, 0.734, 1.087, 1.182, 1.458, 1.998, 2.654, 2.96, 2.731, 2.351, 1.901, 1.59, 1.338, 1.059, 0.721, 0.283, -0.204, -0.672, -1.001, -0.961, -0.338, 0.802, 2.023, 2.82, 3.064, 2.832, 2.406, 1.905, 1.458, 1.022, 0.587, 0.127, -0.324, -0.744, -1.064, -1.309, -1.513, -1.748, -2.053, -2.375, -2.68, -2.913, -3.075, -3.146, -3.154, -3.12, -3.062, -2.951, -2.793, -2.605, -2.399, -2.16, -1.875, -1.53, -1.103, -0.569, 0.068, 0.763, 1.44, 2.011, 2.366, 2.432, 2.272, 2.141, 2.176, 2.599, 3.416, 4.527, 5.583, 6.193, 5.102, 4.105],
  // eslint-disable-next-line max-len
  validRightTigh: [-2.69, -2.689, -2.643, -2.581, -2.512, -2.451, -2.414, -2.411, -2.468, -2.549, -2.583, -2.488, -2.207, -1.743, -1.04, -0.052, 1.184, 2.534, 3.713, 4.34, 4.08, 2.963, 1.388, -0.08, -1.029, -1.353, -0.832, 0.796, 3.788, 6.815, 7.798, 6.311, 3.612, 1.337, -0.411, -1.602, -2.076, -1.861, -1.384, -0.916, -0.547, -0.259, -0.006, 0.284, 0.626, 0.841, 0.726, 0.271, -0.398, -0.97, -1.283, -1.221, -0.988, -0.74, -0.633, -0.596, -0.633, -0.694, -0.803, -0.928, -1.054, -1.19, -1.318, -1.438, -1.505, -1.537, -1.535, -1.54, -1.536, -1.496, -1.385, -1.212, -1.012, -0.822, -0.688, -0.591, -0.499, -0.397, -0.289, -0.194, -0.102, -0.023, 0.071, 0.185, 0.369, 0.627, 0.96, 1.301, 1.51, 1.68, 1.826, 2.099, 2.3, 2.376, 2.268, 2.038, 1.727, 1.301, 0.758, 0.142, -0.495, -1.022, -1.363, -1.358, -0.897, 0.042, 1.263, 2.429, 3.234, 3.493, 3.234, 2.639, 1.983, 1.395, 0.877, 0.391, -0.083, -0.51, -0.877, -1.142, -1.324, -1.448, -1.589, -1.786, -2.047, -2.319, -2.547, -2.703, -2.787, -2.808, -2.785, -2.724, -2.661, -2.61, -2.584, -2.579, -2.572, -2.507, -2.304, -1.895, -1.231, -0.367, 0.613, 1.599, 2.464, 3.027, 3.163, 2.816, 2.057, 1.065, 0.229, 0.156, 0.942, 2.44, 4.141, 5.536, 6.029, 6.738, 5.607],
  switchLabelText: 'Display normal model:',
  emptyGraphMessage: 'No data for this graph at the moment',
}
