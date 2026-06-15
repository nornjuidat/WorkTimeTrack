import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddCheckIn, GetAllRecord, AddCheckOut, GetEmployeeRecords } from "./Fetch";

function useAddCheckIn() {
    const queryClient = useQueryClient();

    const { isPending: isAdding, mutate: addcheckin } = useMutation({
        mutationFn: AddCheckIn,
        onError: (err) => {
            console.log("err", err);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["allRecord"] });
        },
    });

    return { isAdding, addcheckin };
}

function useAddCheckOut() {
    const queryClient = useQueryClient();

    const { isPending: isAdding, mutate: addcheckout } = useMutation({
        mutationFn: AddCheckOut,
        onError: (err) => {
            console.log("err", err);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["allRecord"] });
        },
    });

    return { isAdding, addcheckout };
}

function useGetEmployee() {
    const {
        isPending: isSearching,
        mutate: getemployee,
        data,
        isError,
        error,
    } = useMutation({
        mutationFn: GetEmployeeRecords,
        onError: (err) => {
            console.log("err", err);
        },
        onSuccess: (ok) => {
            console.log(ok);
        },
    });

    return { isSearching, getemployee, data, isError, error };
}

function useGetAllRecord() {
    return useQuery({
        queryKey: ["allRecord"],
        queryFn: GetAllRecord,
        staleTime: 5 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: (failureCount) => failureCount < 3,
    });
}

export { useGetAllRecord, useAddCheckIn, useAddCheckOut, useGetEmployee };