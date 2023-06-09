import PropTypes from "prop-types"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "~/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);


function AccountItem({data}) {
    return (
      <div className={cx("wrapper")}>
        <Image
          className={cx("avatar")}
          src={data.avatar}
          alt={data.full_name}
        ></Image>
        <div className={cx("info")}>
          <h4 className={cx("name")}>
            <span>{data.full_name} </span>
           { data.tick && <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />}
          </h4>
          <span className={cx("username")}>{data.nickname} </span>
        </div>
      </div>
    );
}

AccountItem.propTypes = {
  data : PropTypes.object.isRequired,
} 

export default AccountItem;