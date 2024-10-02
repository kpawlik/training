import myw from 'myWorld-client';

class CompleteFieldViewer extends myw.FieldViewer {
    renderValue(fieldValue){
        if (this.feature.properties.status == 'completed'){
            return;
        }
        return super.renderValue(fieldValue);
    }
}

myw.CompleteFieldViewer = CompleteFieldViewer;

export {
    CompleteFieldViewer
}