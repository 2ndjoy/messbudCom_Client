import React from "react";
import MemberTable from "./MemberTable";
import MemberInput from "./MemberInput";
import ArchiveButton from "../ArchiveButton/ArchiveButton";

const Members = () => {
  return (
    <>
      <p className="lg:text-left text-center text-xl font-bold">Members</p>
      <div className=" mt-9">
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
