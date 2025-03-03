// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

interface IBlockChatUpgradeable {
    event MessageCreated(address indexed sender, bytes20 indexed recipientHash, uint48 createDate, string content);
    event DataUploaded(bytes32 indexed dataHash, string content);

    function messageHashMap(bytes32 messageHash) external view returns (bool);

    function implementationVersion() external pure returns (string memory);

    function getRecipientHash(string memory name) external pure returns (bytes20);

    function getNameHash(string calldata name) external pure returns (bytes12);

    function getMessageHash(
        address sender,
        bytes20 recipientHash,
        uint48 createDate,
        string calldata content
    ) external pure returns (bytes32);

    function getRecipientMessageBlockListLength(bytes20 recipientHash) external view returns (uint48);

    function batchRecipientMessageBlock(
        bytes20 recipientHash,
        uint48 start,
        uint48 length
    ) external view returns (uint48[] memory);

    function batchSenderMessageBlock(
        address sender,
        uint48 start,
        uint48 length
    ) external view returns (uint48[] memory);

    function createMessage(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender
    ) external;

    function createMessageCall(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender,
        bytes calldata data
    ) external payable;

    function createMessageCallBack(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender
    ) external payable;

    function createMessageHash(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender
    ) external;

    function createMessageHashAndCallBack(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender
    ) external payable;

    function createMessageHashAndCall(
        bytes20 recipientHash,
        string calldata content,
        bool isToSender,
        bytes calldata data
    ) external payable;

    function uploadData(bytes12 nameHash, string calldata content) external;
}
