import cakesdata from "./cakesdata";
import Cake from "./Cake";
import { GiCook } from 'react-icons/gi';

const CakeList = () => {
    return (
        <div className="container mb-5">
            <div className="row product-list">
                {
                    cakesdata.length > 0 ?
                        cakesdata.map((each) => (
                            <Cake cake={each} />
                        ))
                        :
                        <div className="text-dark text-center display-4 w-100">
                            <em>
                                All the cakes are sold. <br />
                                Wait, we are preparing <GiCook /> more for you.
                            </em>
                        </div>
                }
            </div>
        </div>
    );
}

export default CakeList;