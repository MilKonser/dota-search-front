import ListItem from '../list-item';
import './list.css';
import Loader from '../common/loader';
import {FIXMELATER} from "../../shared/Constants";


const List = (props: FIXMELATER) => {
    const {items, loaded} = props;
    // @ts-ignore
    if (!loaded ) return;

    // @ts-ignore
    const elements = items.sort(({Timestamp}, b) => {
        if (Timestamp !== b.Timestamp) {
            if (Timestamp < b.Timestamp)
                return 1;
            return -1;
        }
        return 0;
    }).map((item: FIXMELATER) => {
        const {key, ...itemProps} = item;
        return (
            <li key={key} className="list-group-item">
                <ListItem
                    {...itemProps}
                />
            </li>
        );
    });

    return (
        // @ts-ignore
        <ul className="list-group list">
            {elements}
        </ul>
    );
};

export default List;
