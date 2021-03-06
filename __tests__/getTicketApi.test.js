import { getTicketApi } from '../src/utils/getTicketApi';

beforeEach(() => {
    fetch.resetMocks();
});


test('returns result if array', () => {
    fetch.mockResponseOnce(JSON.stringify([
        {
            number: "SHU0001019",
            sys_id: "05976c39db0e1010b3be4870399619d6",
            sys_updated_by: "admin",
            sys_created_on: "2020-07-17 06:37:28",
            sys_mod_count: "0",
            description: "This is not working so i have to go ther",
            sys_updated_on: "2020-07-17 06:37:28",
            sys_tags: "",
            sys_created_by: "admin"
        }
    ]));
    const onResponse = jest.fn();
    const onError = jest.fn();

    return getTicketApi()
        .then(onResponse)
        .catch(onError)
        .finally(() => {
            expect(onResponse).toHaveBeenCalled();
            expect(onError).not.toHaveBeenCalled();
            expect(onResponse.mock.calls[0][0][0]).toEqual({
                number: "SHU0001019",
                sys_id: "05976c39db0e1010b3be4870399619d6",
                sys_updated_by: "admin",
                sys_created_on: "2020-07-17 06:37:28",
                sys_mod_count: "0",
                description: "This is not working so i have to go ther",
                sys_updated_on: "2020-07-17 06:37:28",
                sys_tags: "",
                sys_created_by: "admin"
            });
        });
});
