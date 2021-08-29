import style from './Room.module.css'

const Room = (props) => {

    return (
        <>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.desc}>{props.desc}</span>
            <p className={style.info}>
                {props.info}
            </p>
        </>
    );
}

export default Room