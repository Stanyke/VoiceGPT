const MSG_TYPES = Object.freeze({
  DELETED: "Resource Deleted Successfully",
  UPDATED: "Resource Updated Successfully",
  CREATED: "Resource Created Successfully",
  FETCHED: "Resource Fetched Successfully",
  INVALID_FILE_UPLOAD: "Invalid file upload",
  FILE_NOT_PROCESSED: "File could not be processed",
  SEARCH_NOT_COMPLETED: "Search could not be completed",
  SERVER_ERROR: (msg) => {
    return msg || "An internal error occurred. Try again";
  },
});

module.exports = { MSG_TYPES };
