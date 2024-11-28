import React from "react";
import PropTypes from "prop-types";

const SwapConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  details: { fromToken, toToken, fromAmount, toAmount, estimatedFees, slippage },
}) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-white mb-4">Confirm Swap</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>From:</span>
            <span>{`${fromAmount} ${fromToken}`}</span>
          </div>
          <div className="flex justify-between">
            <span>To:</span>
            <span>{`${toAmount} ${toToken}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Fees:</span>
            <span>${estimatedFees.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Slippage:</span>
            <span>{slippage.toFixed(2)}%</span>
          </div>
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

SwapConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Determines if the modal is visible
  onClose: PropTypes.func.isRequired, // Function to close the modal
  onConfirm: PropTypes.func.isRequired, // Function to confirm the action
  details: PropTypes.shape({
    fromToken: PropTypes.string.isRequired, // Token being swapped from
    toToken: PropTypes.string.isRequired, // Token being swapped to
    fromAmount: PropTypes.string.isRequired, // Amount being swapped from
    toAmount: PropTypes.string.isRequired, // Amount being swapped to
    estimatedFees: PropTypes.number.isRequired, // Fees for the swap
    slippage: PropTypes.number.isRequired, // Slippage percentage
  }).isRequired,
};

export default SwapConfirmationModal;
