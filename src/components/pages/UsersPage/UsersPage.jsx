import s from "./UsersPage.module.css";

import { users } from "../../../data";
import User from "../../User/User";
import { useState } from "react";
import Modal from "../../Modal/Modal";
import Button from "../../Button/Button";

function UsersPage() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [userModal, setUserModal] = useState(null)

  function openModal() {
    // setUserModal
    setIsModalOpen((prev) => !prev);
    // setIsModalOpen(true);
  }

  return (
    <div className={s.usersList}>
      <h4>Users list</h4>
      <form className={s.form}>
        <label className={s.searchLabel} htmlFor="searchInput">
          Search:
        </label>
        <input
          className={s.formItem}
          id="searchInput"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(
              e.target.value
              // `${e.target.value.charAt(0).toUpperCase()}${e.target.value.slice(
              //   1
              // )}`
            );
          }}
          // style={{
          //   border: users
          //     .map((user) => user.name.toLowerCase())
          //     .includes(name.toLowerCase())
          //     ? null
          //     : "1px solid red",
          // }}
        />
        <label className={s.searchLabel} htmlFor="position">
          Select position:
        </label>
        <select
          className={s.formItem}
          id="position"
          placeholder="select position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        >
          <option disabled value="">
            -Choose-
          </option>
          <optgroup label="Team">
            <option value="All">All</option>
          </optgroup>

          <optgroup label="Developers">
            <option value="Software engineer">Software engineer</option>
            <option value="Designer">Designer</option>
            <option value="QA engineer">QA engineer</option>
          </optgroup>

          <optgroup label="Managers">
            <option value="HR manager">HR manager</option>
            <option value="Team manager">Team manager</option>
          </optgroup>
        </select>
      </form>
      {/* <pre>
        Name: {name}
        <br />
        Position: {position}
      </pre> */}
      <ul>
        {users
          .filter((user) => {
            return position === "All"
              ? user.name.toLowerCase().includes(name.toLowerCase())
              : user.name.toLowerCase().includes(name.toLowerCase()) &&
                  user.position === position;
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => {
            return (
              <User
                key={user.id}
                avatar={user.avatar}
                name={user.name}
                position={user.position}
                onClick={openModal}
                id={user.id}
              />
            );
          })}
      </ul>
      <Modal isModalOpen={isModalOpen}>
        <h3>Modal window </h3>
        <p>Lorem ipsum</p>
        <Button
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          X
        </Button>
      </Modal>
    </div>
  );
}

export default UsersPage;
