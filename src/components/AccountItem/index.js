import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);


function AccountItem() {
    return (
      <div className={cx("wrapper")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1680606000&x-signature=Wyy1tUr6%2FCwbodr4nFY1N42LtAk%3D"
          alt="Hoaa"
        ></img>
        <div className={cx("info")}>
          <h4 className={cx("name")}>
            <span>Đào Lê Phương Hoa</span>
            <FontAwesomeIcon className= {cx('check')} icon={faCheckCircle} />
          </h4>
          <span className={cx("username")}>ĐàoLêPhươngHoa</span>
        </div>
      </div>
    );
}

export default AccountItem;