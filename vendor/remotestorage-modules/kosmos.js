/**
 * File: Kosmos
 *
 * App-specific remoteStorage module for Hyperchannel/Kosmos
 */

/* global RemoteStorage */
RemoteStorage.defineModule("kosmos", function (privateClient, publicClient) {

  /**
   * Schema: chat-messages/daily
   *
   * Represents one day of chat messages
   *
   * Example:
   *
   * (start code)
   */

  // const archiveSchema = {
  // };
  // privateClient.declareType("daily-archive", "https://kosmos.org/ns/v1", archiveSchema);
  // publicClient.declareType("daily-archive", "https://kosmos.org/ns/v1", archiveSchema);

  var exports = {
    client: privateClient,
    publicClient: publicClient
  };

  // Return public functions
  return { exports: exports };
});
