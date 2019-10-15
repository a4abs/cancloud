/*
 * Minio Cloud Storage (C) 2018 Minio, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody } from "react-bootstrap";
import * as objectsActions from "./actions";

const PreviewObjectModal = ({
  previewObjectDetails: { content, object },
  hidePreviewObject
}) => (
  <Modal
    show={true}
    animation={false}
    onHide={hidePreviewObject}
    bsSize="large"
  >
    <ModalHeader>Preview {object.name}</ModalHeader>
    <ModalBody style={{ wordBreak: "break-word" }}>
      {content.objContent}
    </ModalBody>
    <div className="modal-footer">
      <button className="btn btn-link" onClick={hidePreviewObject}>
        Cancel
      </button>
    </div>
  </Modal>
);

const mapStateToProps = (state, ownProps) => {
  return {
    object: ownProps.object,
    previewObjectDetails: state.objects.previewObject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    hidePreviewObject: () => dispatch(objectsActions.hidePreviewObject())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreviewObjectModal);