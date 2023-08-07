import classes from './Calculator.module.css';

const Calculator = () => {
    return <div className={classes.mainFrame}>
        <div className={classes.calculator}>
            <div className={classes.display}>0
            </div>
            <div className={classes.buttons}>
                <button className={classes.button} type="submit">7</button>
                <button className={classes.button} type="submit">8</button>
                <button className={classes.button} type="submit">9</button>
                <button className={classes.button} type="submit">4</button>
                <button className={classes.button} type="submit">5</button>
                <button className={classes.button} type="submit">6</button>
                <button className={classes.button} type="submit">1</button>
                <button className={classes.button} type="submit">2</button>
                <button className={classes.button} type="submit">3</button>
                <button className={classes.button} type="submit">C</button>
                <button className={classes.button} type="submit">0</button>
                <button className={classes.button} type="submit">+</button>
                <button className={classes.button} type="submit">-</button>
                <button className={classes.button} type="submit">/</button>
                <button className={classes.button} type="submit">*</button>
            </div>
        </div>
    </div>
}

export default Calculator;