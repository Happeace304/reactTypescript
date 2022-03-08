import FormDataModel from "./FormData.model";

export default interface FormDataStoreModel {
  state: 'idle' | 'loading',
  value: FormDataModel
}
