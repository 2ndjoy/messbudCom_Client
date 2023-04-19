import React from "react";
import MemberTable from "./MemberTable";
import MemberInput from "./MemberInput";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const Members = () => {
  return (
    <>
      <div>
        <MemberInput />
        <div className="my-5">
          <MemberTable />
        </div>
      </div>
      <ArchiveButton />
    </>
  );
};

export default Members;
