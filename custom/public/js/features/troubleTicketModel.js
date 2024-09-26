import myw from 'myWorld-client';

class troubleTicketModel extends myw.MyWorldFeature {
    static {
        this.prototype.readonlyFields = ['datetime_completed'];
    }
}

myw.featureModels['trouble_ticket'] = troubleTicketModel;


export {
    troubleTicketModel
}